/*Write a C++ program to implement a class called BankAccount that has
private member variables for account number and balance.
Include member functions to deposit and withdraw money from the account.*/

#include<iostream>
using namespace std;

class Account {
    
    
    private: int balance =1000;
    
    public:
    void cradit(int val){
        
        balance += val;
        cout<<"\nnew balance"<<balance;
        
    }
      void debit(int val){
        
        balance -= val;
        cout<<"\nnew balance"<<balance;
      }
};

int main(){
    Account a;
    a.cradit(50000);
    a.debit(20000);
    
}