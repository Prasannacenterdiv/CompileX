import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";

const languageFinder = [
  {
    label: "JavaScript",
    extension: javascript(),
    lang: "javascript",
    boilerplate: `// Welcome to Compile-X 🚀
// Write your JavaScript code below

console.log("Hello from Compile-X");`
  },
  {
    label: "Python",
    extension: python(),
    lang: "python",
    boilerplate: `# Welcome to Compile-X 🚀
# Write your Python code below

print("Hello from Compile-X")`
  },
  {
    label: "C++",
    extension: cpp(),
    lang: "cpp",
    boilerplate: `// Welcome to Compile-X 🚀
// Write your C++ code below

#include <iostream>
using namespace std;

int main() {
    cout << "Hello from Compile-X";
    return 0;
}`
  },
  {
    label: "Java",
    extension: java(),
    lang: "java",
    boilerplate: `// Welcome to Compile-X 🚀
// Write your Java code below

class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Compile-X");
    }
}`
  }
];

export default languageFinder;
