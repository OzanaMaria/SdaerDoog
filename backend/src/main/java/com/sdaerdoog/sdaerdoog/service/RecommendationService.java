package com.sdaerdoog.sdaerdoog.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
public class RecommendationService {

    public List<String> getRecommendations (String book) {
        List<String> recommendations = new ArrayList<>();
        recommendations.add(book);
        ProcessBuilder processBuilder = new ProcessBuilder();
        processBuilder.command("bash", "-c", "python" + "./scripts/recomandare.py " + book);
//        String fetching = "python " + "./scripts/recomandare.py " + book;
//        String[] commandToExecute = new String[]{"cmd.exe", "/c", fetching};
        try {
//            Process extractProcess = Runtime.getRuntime().exec(commandToExecute);
//            BufferedReader input = new BufferedReader(new InputStreamReader(extractProcess.getInputStream()));
//            String pyString = input.readLine();
//            System.out.println(pyString);
            Process process = processBuilder.start();
            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                log.info(line);
            }
        } catch (IOException e) {
            log.error("process failed to start", e);
        }

        return recommendations;
    }
}
