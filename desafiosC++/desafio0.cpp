#include <iostream>
#include <string>

using namespace std;

#define N 2

string toUpperCase(const string& input) {
    string result = input;
    for (char& c : result) {
        c = toupper(c);
    }
    return result;
}

int main() {
    string abc = "abcdefghijklmnopqrstuvwxyz";
    string word = "yo he logrado encender una cerilla";
    string res = "";
    int key[N] = {2,3};
    int k_aux = 0;

    for (auto i : word){
        if (i != ' ') {
            int pos = abc.find(i);
            if (k_aux == N) {
                    k_aux = 0;
            }
            res += abc[(pos + key[k_aux]) % abc.size()];
            k_aux++;
        }
    }

    string res0 = toUpperCase(res);

    cout << res0 << '\n';
    return 0;
}
