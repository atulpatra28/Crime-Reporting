package CrimeService;

public class CrimeFactory {

    public static CrimeReport createCrime(String type, String location, String description, String reporter) {
        if (type.equalsIgnoreCase("theft")) {
            return new TheftReport(location, description, reporter);
        }
        // Future crime types can be added here
        throw new IllegalArgumentException("Unsupported crime type: " + type);
    }
}
