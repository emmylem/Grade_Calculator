function Calculate_S(grade) {
    grade = parseFloat(grade);

    if (grade >= 93) {
        return 5.0;
    } else if (grade >= 90) {
        return 4.7;
    } else if (grade >= 87) {
        return 4.3;
    } else if (grade >= 83) {
        return 4.0;
    } else if (grade >= 80) {
        return 3.7;
    } else if (grade >= 77) {
        return 3.3;
    } else if (grade >= 73) {
        return 3.0;
    } else if (grade >= 70) {
        return 2.7;
    } else if (grade >= 67) {
        return 2.3;
    } else if (grade >= 63) {
        return 2.0;
    } else if (grade >= 60) {
        return 1.7;
    } else {
        return 0;
    }
}

function CalculateGrade() {
    let core_subs_len = document.getElementsByName("core").length;
    let core_subs = [];

    for (let i = 0; i < core_subs_len; i++) {
        core_subs[i] = document.getElementsByName("core")[i].value;
    }

    let elective_subs_len = document.getElementsByName("elective").length;
    let elective_subs = [];

    for (let i = 0; i < elective_subs_len; i++) {
        elective_subs[i] = document.getElementsByName("elective")[i].value;
    }

    let core_sum = 0;
    let elective_sum = 0;

    for (let i = 0; i < 4; i++) {
        core_sum += Calculate_S(core_subs[i]);
    }

    for (let i = 0; i < 6; i++) {
        elective_sum += Calculate_S(elective_subs[i]);
    }

    let Final_Core = core_sum * 0.5;
    let Final_Elect = elective_sum * 0.25;
    let Final = Final_Core + Final_Elect;
    let Final_Grade = Final / 2.75; // Adjusted for 5.0 CGPA system

    document.getElementById("result").innerHTML =
        "<b style='font-size: 40px;'> " + Final_Grade.toFixed(2) + " </b>";
}
