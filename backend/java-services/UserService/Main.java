public class Main {
    public static void main(String[] args) {
        UserManager manager = UserManager.getInstance();
        manager.login("test_user");
        System.out.println("Current user: " + manager.getCurrentUser());
    }
}
