package CrimeService;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class CrimeReportDAO {

    private static final String URL = "jdbc:mysql://localhost:3306/crime_reporting_system";
    private static final String USER = "root"; // ✅ update if needed
    private static final String PASSWORD = ""; // ✅ your MySQL password

    public static void saveReport(String type, String location, String description, String reporter) {
        try {
            Connection conn = DriverManager.getConnection(URL, USER, PASSWORD);
            String sql = "INSERT INTO crime_reports (type, location, description, reporter) VALUES (?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);

            stmt.setString(1, type);
            stmt.setString(2, location);
            stmt.setString(3, description);
            stmt.setString(4, reporter);

            stmt.executeUpdate();

            stmt.close();
            conn.close();

            System.out.println("✅ Crime report saved to database.");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
