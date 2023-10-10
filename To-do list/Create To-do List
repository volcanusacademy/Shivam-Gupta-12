/* Create a to-do list program that allows users to add tasks, mark them as 
complete, and remove them. Use data structures like arrays or linked lists.*/


#include <iostream>
#include <string>
using namespace std;

const int MAX_TASKS = 100;

struct Task {
    string description;
    bool completed;
};

void addTask(Task tasks[], int& numTasks, const string& description) {
    if (numTasks < MAX_TASKS) {
        Task newTask;
        newTask.description = description;
        newTask.completed = false;
        tasks[numTasks] = newTask;
        numTasks++;
        cout << "Task added successfully!\n";
    } else {
        std::cout << "Max limit reached. Unable to add more tasks.\n";
    }
}

void markTaskAsComplete(Task tasks[], int numTasks, int taskIndex) {
    if (taskIndex >= 0 && taskIndex < numTasks) {
        tasks[taskIndex].completed = true;
        cout << "Task marked as complete!\n";
    } else {
        cout << "Invalid task index.\n";
    }
}

void removeTask(Task tasks[], int& numTasks, int taskIndex) {
    if (taskIndex >= 0 && taskIndex < numTasks) {
        for (int i = taskIndex; i < numTasks - 1; i++) {
            tasks[i] = tasks[i + 1];
        }
        numTasks--;
        cout << "Task removed successfully!\n";
    } else {
        cout << "Invalid task index.\n";
    }
}

void printTasks(const Task tasks[], int numTasks) {
    cout << "Tasks:\n";
    for (int i = 0; i < numTasks; i++) {
        cout << i + 1 << ". ";
        if (tasks[i].completed) {
            cout << "[X] ";
        } else {
            cout << "[ ] ";
        }
        cout << tasks[i].description << "\n";
    }
}

int main() {
    Task tasks[MAX_TASKS];
    int numTasks = 0;
    int choice;

    do {
        cout << "Menu:\n";
        cout << "1. Add Task\n";
        cout << "2. Mark Task as Complete\n";
        cout << "3. Remove Task\n";
        cout << "4. Print Tasks\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice) {
            case 1: {
                string description;
                cout << "Enter task description: ";
                cin.ignore();
                getline(cin, description);
                addTask(tasks, numTasks, description);
                break;
            }
            case 2: {
                int taskIndex;
                cout << "Enter task index: ";
                cin >> taskIndex;
                markTaskAsComplete(tasks, numTasks, taskIndex - 1);
                break;
            }
            case 3: {
                int taskIndex;
                cout << "Enter task index: ";
                cin >> taskIndex;
                removeTask(tasks, numTasks, taskIndex - 1);
                break;
            }
            case 4:
                printTasks(tasks, numTasks);
                break;
            case 5:
                cout << "Exiting...\n";
                break;
            default:
                cout << "Invalid choice. Please try again.\n";
        }
    } while (choice != 5);

    return 0;
}