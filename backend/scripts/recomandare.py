import pandas as pd
import numpy as np
import sys
from scipy.sparse import csr_matrix
from sklearn.neighbors import NearestNeighbors

def main():
    books = pd.read_csv('BX-Books.csv', sep=';', error_bad_lines=False, encoding="latin-1")
    books.columns = ['ISBN', 'bookTitle', 'bookAuthor', 'yearOfPublication', 'publisher', 'imageUrlS', 'imageUrlM', 'imageUrlL']
    users = pd.read_csv('BX-Users.csv', sep=';', error_bad_lines=False, encoding="latin-1")
    users.columns = ['userID', 'Location', 'Age']
    ratings = pd.read_csv('BX-Book-Ratings.csv', sep=';', error_bad_lines=False, encoding="latin-1")
    ratings.columns = ['userID', 'ISBN', 'bookRating']

    # print(ratings.shape)
    # print(list(ratings.columns))


    # print(books.shape)
    # print(list(books.columns))

    # print(users.shape)
    # print(list(users.columns))

    counts1 = ratings['userID'].value_counts()
    ratings = ratings[ratings['userID'].isin(counts1[counts1 >= 150].index)]
    counts = ratings['bookRating'].value_counts()
    ratings = ratings[ratings['bookRating'].isin(counts[counts >= 70].index)]

    combine_book_rating = pd.merge(ratings, books, on='ISBN')
    columns = ['yearOfPublication', 'publisher', 'bookAuthor', 'imageUrlS', 'imageUrlM', 'imageUrlL']
    combine_book_rating = combine_book_rating.drop(columns, axis=1)
    # print(combine_book_rating.head())

    combine_book_rating = combine_book_rating.dropna(axis = 0, subset = ['bookTitle'])

    book_ratingCount = (combine_book_rating.
         groupby(by = ['bookTitle'])['bookRating'].
         count().
         reset_index().
         rename(columns = {'bookRating': 'totalRatingCount'})
         [['bookTitle', 'totalRatingCount']]
        )

    rating_with_totalRatingCount = combine_book_rating.merge(book_ratingCount, left_on = 'bookTitle', right_on = 'bookTitle', how = 'left')

    popularity_threshold = 50
    rating_popular_book = rating_with_totalRatingCount.query('totalRatingCount >= @popularity_threshold')

    us_canada_user_rating = rating_popular_book.merge(users, left_on = 'userID', right_on = 'userID', how = 'left')
    us_canada_user_rating=us_canada_user_rating.drop('Age', axis=1)
    us_canada_user_rating = us_canada_user_rating.drop_duplicates(['userID', 'bookTitle'])
    us_canada_user_rating_pivot = us_canada_user_rating.pivot(index = 'bookTitle', columns = 'userID', values = 'bookRating').fillna(0)
    us_canada_user_rating_matrix = csr_matrix(us_canada_user_rating_pivot.values)
    model_knn = NearestNeighbors(metric = 'cosine', algorithm = 'brute')
    model_knn.fit(us_canada_user_rating_matrix)
    # print(model_knn)


    us_canada_book_title = us_canada_user_rating_pivot.index
    us_canada_book_list = list(us_canada_book_title)
    book_index = us_canada_book_list.index(sys.argv[1])
    # print(book_index)

    # print(us_canada_user_rating_pivot.iloc[book_index,:].values.reshape(1,-1))
    distances, indices = model_knn.kneighbors(us_canada_user_rating_pivot.iloc[book_index,:].values.reshape(1, -1), n_neighbors = 6)
    us_canada_user_rating_pivot.index[book_index]

    recommendations = []
    for i in range(0, len(distances.flatten())):
        if i == 0:
            print('Recommendations for {0}:\n'.format(us_canada_user_rating_pivot.index[book_index]))
        else:
            print('{0}: {1}, with distance of {2}:'.format(i, us_canada_user_rating_pivot.index[indices.flatten()[i]], distances.flatten()[i]))
            recommendations.append(us_canada_user_rating_pivot.index[indices.flatten()[i]])

    return(recommendations)

if __name__ == "__main__":
    main()
