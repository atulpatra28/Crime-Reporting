package CrimeService;

public class TheftReport extends CrimeReport {

    public TheftReport(String location, String description, String reporter) {
        super(location, description, reporter);
    }

    @Override
    public void processReport() {
        System.out.println("Processing Theft Report:");
        System.out.println("Location: " + location);
        System.out.println("Description: " + description);
        System.out.println("Reported by: " + reporter);

        // Save to database
        DatabaseUtil.insertCrimeReport("Theft", location, description, reporter);
    }
}
