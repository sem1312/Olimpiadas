#include <iostream>
#include <vector>
using namespace std;

std::vector<int> arr;
int a;

int cadenas(int a) {
    arr.push_back(a);
    if (a == 1) {
        return 1;
    } else {
        for (int i = a - 1; i >= 1; i--) {
            if (a % i == 0) {
                return cadenas(i);
            }
        }
    }
    return 0;
}

int main() {

    cin >> a;
 
    cadenas(a);
    int sum = 0;
    for (int value : arr) {
        sum += value;
    }
    cout << sum << endl;
    return 0;
}