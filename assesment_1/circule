/*  Write a C++ program to implement a class called Circle that has private member variables for radius.
Include member functions to calculate the circle's area and circumference.
Create a Class named Circle.

use double data type for radius, area and circumference.*/
#include <iostream>
#include <cmath>
using namespace std;
 
const double PI = 3.14159;

class Circle {
  private: double radius;

  public:
    
    Circle(double rad): radius(rad) {}

  
  double calculateArea() {
    return PI * (radius*radius);
  }

 
  double calculateCircumference() {
    return 2 * PI * radius;
  }
};

int main() {
  
  double radius;
  cout << "Input the radius of the circle: ";
  cin >> radius;
  Circle circle(radius);


  double area = circle.calculateArea();
  cout << "Area: " << area;

  
  double circumference = circle.calculateCircumference();
  cout << "\nCircumference: " << circumference;

  return 0;
}