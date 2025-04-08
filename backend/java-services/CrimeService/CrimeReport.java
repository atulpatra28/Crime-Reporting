package CrimeService;

public abstract class CrimeReport {
    protected String location;
    protected String description;
    protected String reporter;

    public CrimeReport(String location, String description, String reporter) {
        this.location = location;
        this.description = description;
        this.reporter = reporter;
    }

    public abstract void processReport();
}
