public class UserManager {
    private static UserManager instance;
    private String currentUser;

    private UserManager() {
        // private constructor
    }

    public static UserManager getInstance() {
        if (instance == null) {
            instance = new UserManager();
        }
        return instance;
    }

    public void login(String username) {
        this.currentUser = username;
        System.out.println(username + " logged in.");
    }

    public String getCurrentUser() {
        return currentUser;
    }
}
