package CrimeService;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class DatabaseUtil {
    private static final String URL = "jdbc:mysql://localhost:3306/crime_reporting";
    private static final String USER = "root"; // use your MySQL username
    private static final String PASSWORD = ""; // use your MySQL password

    public static void insertCrimeReport(String type, String location, String description, String reporter) {
        try {
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            String query = "INSERT INTO crime_reports (type, location, description, reporter) VALUES (?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(query);
            stmt.setString(1, type);
            stmt.setString(2, location);
            stmt.setString(3, description);
            stmt.setString(4, reporter);
            stmt.executeUpdate();
            System.out.println("✅ Crime report inserted into database.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
