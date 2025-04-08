package CrimeService;
import static spark.Spark.*;

import static spark.Spark.*;
import com.google.gson.*;

public class Main {

    public static void main(String[] args) {

        // CLI mode: If args are passed, run from terminal
        if (args.length >= 4) {
            String type = args[0];
            String location = args[1];
            String description = args[2];
            String reporter = args[3];

            CrimeReport report = CrimeFactory.createCrime(type, location, description, reporter);
            report.processReport();
            return;
        }
        // Set server port
        port(4000);

        // Allow CORS (optional but useful for frontend or Postman/Restfox)
        before((req, res) -> {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
            res.header("Access-Control-Allow-Headers", "*");
        });

        // Define route for POST /api/crime/report
        post("/api/crime/report", (request, response) -> {
            response.type("application/json");

            Gson gson = new Gson();
            CrimeRequest crime = gson.fromJson(request.body(), CrimeRequest.class);

            // Create and process the report using your factory
            CrimeReport report = CrimeFactory.createCrime(
                crime.type, crime.location, crime.description, crime.reporter
            );

            report.processReport();

            return gson.toJson("Report processed successfully for: " + crime.type);
        });
    }

    // Inner class for request body mapping
    static class CrimeRequest {
        String type;
        String location;
        String description;
        String reporter;
    }
}
