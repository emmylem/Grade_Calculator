def calculation(grade):
    grade = int(grade)
    grade = float(grade)

    if grade >= 90:
        calculation.grade = 5.0
    elif grade >= 85:
        calculation.grade = 4.7
    elif grade >= 80:
        calculation.grade = 4.3
    elif grade >= 75:
        calculation.grade = 4.0
    elif grade >= 70:
        calculation.grade = 3.7
    elif grade >= 65:
        calculation.grade = 3.3
    elif grade >= 60:
        calculation.grade = 3.0
    else:
        calculation.grade = 0.0


def calculation2(grade):
    grade = int(grade)
    grade = float(grade)

    if grade >= 90:
        calculation2.grade = 5.0
    elif grade >= 85:
        calculation2.grade = 4.8
    elif grade >= 80:
        calculation2.grade = 4.5
    elif grade >= 75:
        calculation2.grade = 4.2
    elif grade >= 70:
        calculation2.grade = 3.9
    elif grade >= 65:
        calculation2.grade = 3.6
    elif grade >= 60:
        calculation2.grade = 3.3
    else:
        calculation2.grade = 0.0


def calculate_cpga(core_grades, elective_grades):
    total_core_grades = sum(core_grades)
    total_elective_grades = sum(elective_grades)

    core_credits = len(core_grades)
    elective_credits = len(elective_grades)

    core_cpga = total_core_grades / core_credits
    elective_cpga = total_elective_grades / elective_credits

    return (core_cpga + elective_cpga) / 2.0

