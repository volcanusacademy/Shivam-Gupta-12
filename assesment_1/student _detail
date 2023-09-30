/* Write a C++ program to implement a class called Student that has private member variables for
name, class, roll number, and marks. Include member functions to calculate the grade
based on the marks and display the student's information.
marks     grade

90+              A+

80+              A

70+              B

60+              B+

50+              C

33-50           D

0-33             F*/




#include <iostream>
#include <string>
using namespace std;

class Student {
  private: 
  
  string name;
  int studentClass,rollNumber;
  
  float marks;

  public:
    
    Student(string studentName,
      int Class, int rollNum, float studentMarks): 
	  name(studentName),
  studentClass(Class),
  rollNumber(rollNum),
  marks(studentMarks) {}

  
   string calculateGrade() {
    if (marks >= 90) {
      return "A+";
    } else if (marks >= 80) {
      return "A";
    } else if (marks >= 70) {
      return "B+";
    } else if (marks >= 60) {
      return "B";
    } 
    else if (marks >= 50) {
      return "C";
    } 
    else if (marks >= 33) {
      return "D";
    } 
    else {
      return "Fail";
    }
  }

  void display() {
    cout << "\n\nName: " << name;
    cout << "\nClass: " << studentClass;
    cout << "\nRoll Number: " << rollNumber;
    cout << "\nMarks: " << marks;
    cout << "\nGrade: " << calculateGrade();
  }
};

int main() {
  
  string studentName;
  int Class;
  int rollNum;
  float studentMarks;
  cout << "Student details: ";
  cout << "\nName: ";
  cin>> studentName;

  cout << "\nClass: ";
  cin>> Class;

  cout << "\nRoll number: ";
  cin >> rollNum;

  cout << "\nMarks (0-100): ";
  cin >> studentMarks;

  Student student (studentName, Class, rollNum, studentMarks);
  student.display();

  return 0;
}