const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];


document.addEventListener("DOMContentLoaded", () => {
    let headerButton = document.getElementById("header-button");

    headerButton.addEventListener("click", () => {
        let headerNav = document.getElementById("header-nav");
        let hamburgerIcon = document.getElementById("hamburger-icon");
        let xIcon = document.getElementById("x-icon");

        if (headerNav.style.display != "block") {
            headerNav.style.display = "block";
            hamburgerIcon.style.display = "none";
            xIcon.style.display = "block";
        } else {
            headerNav.style.display = "none";
            xIcon.style.display = "none";
            hamburgerIcon.style.display = "block";
        }
    });

    // Get the current year
    let currentYear = new Date().getFullYear();
    // Get the last modified date
    let lastModified = document.lastModified;

    // Output the current year and last modified date
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

    updateCourseList(courses);

    let selectingButtons = document.getElementsByClassName("selecting-buttons")[0];

    selectingButtons.addEventListener("click", (event) => {
        let textContent = event.target.innerText;

        if (textContent == "All") {
            updateCourseList(courses);
        } else if (textContent == "WDD") {
            let updatedCourses= courses.filter((course) => course.subject == "WDD");

            console.log(updatedCourses);
            updateCourseList(updatedCourses);
        } else if (textContent == "CSE") {
            let updatedCourses= courses.filter((course) => course.subject == "CSE");

            console.log(updatedCourses);
            updateCourseList(updatedCourses);
        }
    });
});

function updateCourseList(courses) {
    let courseList = document.getElementById("course-list");
    courseList.innerHTML = "";

    let requiredCredits = document.getElementById("required-credits");
    requiredCredits.innerText = courses.reduce((acc, course) => acc + course.credits, 0);

    courses.forEach(course => {
        let li = document.createElement("li");
        li.textContent = `${course.subject} ${course.number}`;

        if (!course.completed) {
            li.setAttribute("class", "disabled");
        }

        courseList.appendChild(li);
    });
}