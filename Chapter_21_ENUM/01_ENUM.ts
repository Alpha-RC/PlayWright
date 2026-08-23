enum TestStatus {

    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"

}

// with enum we can assign default values for particular constant like in above case pass will be PASS

console.log(TestStatus.Pass);   //Output: PASS