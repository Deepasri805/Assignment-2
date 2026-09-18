/**
 * ==========================================================================
 * SCRIPT.JS - Pure Vanilla JavaScript Engine (No framework, no build tools)
 * Student Profile & Academic Dashboard
 * Student: Deepasri J P | Reg No: 24UCS18 | Thiagarajar College
 * 
 * Works 100% offline when index.html is opened directly (file://) in Windows!
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. STUDENT PROFILE DATA STATE
// --------------------------------------------------------------------------
var studentProfile = {
  fullName: "Deepasri J P",
  registerNumber: "24UCS18",
  dateOfBirth: "25.08.2006",
  gender: "Female",
  department: "Computer Science",
  course: "B.Sc Computer Science",
  currentYear: "III",
  academicYear: "2024-2027",
  college: "Thiagarajar College",
  collegeLocation: "Madurai, Tamil Nadu",
  email: "24ucs18@tcarts.in",
  phone: "7603923278",
  place: "Madurai",
  fatherName: "Parthiban J S V",
  motherName: "Priya J P",
  address: "11/2 Krishnapuram 4th Street, Keelavasal, Madurai",
  pinCode: "625009"
};

// --------------------------------------------------------------------------
// 2. ACADEMIC SEMESTER MARKS DATA (SEMESTERS 1 TO 4)
// --------------------------------------------------------------------------
var semestersData = [
  {
    semesterNumber: 1,
    semesterName: "Semester 1",
    academicYearLabel: "First Year (2024-2025)",
    yearNumber: 1,
    subjects: [
      {
        code: "U24P1TA11",
        name: "POTHU TAMIL-I (TAMIL ILAKKIYA VARALARU-I)",
        internal: "24/25",
        external: "57/75",
        obtained: 81,
        maxMarks: 100,
        credit: 3,
        gradePoint: 8.1,
        grade: "A",
        result: "Pass"
      },
      {
        code: "U24P2EN11",
        name: "ENGLISH THROUGH PROSE",
        internal: "21/25",
        external: "50/75",
        obtained: 71,
        maxMarks: 100,
        credit: 3,
        gradePoint: 7.1,
        grade: "B",
        result: "Pass"
      },
      {
        code: "U24AEES11",
        name: "ENVIRONMENTAL STUDIES",
        internal: "15/15",
        external: "30/35",
        obtained: 45,
        maxMarks: 50,
        credit: 2,
        gradePoint: 9.0,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UCS24CT11",
        name: "PROGRAMMING IN C",
        internal: "24/25",
        external: "48/75",
        obtained: 72,
        maxMarks: 100,
        credit: 4,
        gradePoint: 7.2,
        grade: "B",
        result: "Pass"
      },
      {
        code: "UCS24CT12",
        name: "DIGITAL PRINCIPLES & COMPUTER ORGANIZATION",
        internal: "23/25",
        external: "49/75",
        obtained: 72,
        maxMarks: 100,
        credit: 4,
        gradePoint: 7.2,
        grade: "B",
        result: "Pass"
      },
      {
        code: "UCS24CL11",
        name: "PROGRAMMING IN C LAB",
        internal: "39/40",
        external: "59/60",
        obtained: 98,
        maxMarks: 100,
        credit: 2,
        gradePoint: 9.8,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UMA24GT11S",
        name: "DISCRETE MATHEMATICAL STRUCTURES",
        internal: "23/25",
        external: "58/75",
        obtained: 81,
        maxMarks: 100,
        credit: 5,
        gradePoint: 8.1,
        grade: "A",
        result: "Pass"
      }
    ]
  },
  {
    semesterNumber: 2,
    semesterName: "Semester 2",
    academicYearLabel: "First Year (2024-2025)",
    yearNumber: 1,
    subjects: [
      {
        code: "U24P1TA21",
        name: "POTHU TAMIL - II (TAMIL ILAKKIYAVARALARU - II)",
        internal: "22/25",
        external: "48/75",
        obtained: 70,
        maxMarks: 100,
        credit: 3,
        gradePoint: 7.0,
        grade: "B",
        result: "Pass"
      },
      {
        code: "U24P2EN21",
        name: "ENGLISH THROUGH FICTION",
        internal: "23/25",
        external: "43/75",
        obtained: 66,
        maxMarks: 100,
        credit: 3,
        gradePoint: 6.6,
        grade: "C",
        result: "Pass"
      },
      {
        code: "U24AEVE21",
        name: "VALUE EDUCATION",
        internal: "15/15",
        external: "29/35",
        obtained: 44,
        maxMarks: 50,
        credit: 2,
        gradePoint: 8.8,
        grade: "A",
        result: "Pass"
      },
      {
        code: "UCS24CT21",
        name: "JAVA PROGRAMMING",
        internal: "25/25",
        external: "54/75",
        obtained: 79,
        maxMarks: 100,
        credit: 4,
        gradePoint: 7.9,
        grade: "B",
        result: "Pass"
      },
      {
        code: "UCS24CL21",
        name: "JAVA PROGRAMMING LAB",
        internal: "40/40",
        external: "60/60",
        obtained: 100,
        maxMarks: 100,
        credit: 2,
        gradePoint: 10.0,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UCS24CL22",
        name: "WEB TECHNOLOGY LAB",
        internal: "40/40",
        external: "60/60",
        obtained: 100,
        maxMarks: 100,
        credit: 2,
        gradePoint: 10.0,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UMA24GT21S",
        name: "BASIC STATISTICS",
        internal: "25/25",
        external: "66/75",
        obtained: 91,
        maxMarks: 100,
        credit: 5,
        gradePoint: 9.1,
        grade: "O",
        result: "Pass"
      }
    ]
  },
  {
    semesterNumber: 3,
    semesterName: "Semester 3",
    academicYearLabel: "Second Year (2025-2026)",
    yearNumber: 2,
    subjects: [
      {
        code: "UCS24CT31",
        name: "RELATIONAL DATABASE MANAGEMENT SYSTEMS",
        internal: "24/25",
        external: "55/75",
        obtained: 79,
        maxMarks: 100,
        credit: 4,
        gradePoint: 7.9,
        grade: "B",
        result: "Pass"
      },
      {
        code: "UCS24CT32",
        name: "DATA STRUCTURES AND ALGORITHMS",
        internal: "21/25",
        external: "51/75",
        obtained: 72,
        maxMarks: 100,
        credit: 4,
        gradePoint: 7.2,
        grade: "B",
        result: "Pass"
      },
      {
        code: "UCS24CL31",
        name: "RELATIONAL DATABASE MANAGEMENT SYSTEMS LAB",
        internal: "40/40",
        external: "60/60",
        obtained: 100,
        maxMarks: 100,
        credit: 2,
        gradePoint: 10.0,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UCS24CL32",
        name: "DATA STRUCTURES LAB",
        internal: "40/40",
        external: "60/60",
        obtained: 100,
        maxMarks: 100,
        credit: 2,
        gradePoint: 10.0,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UMA24GT31S",
        name: "COMPUTATIONAL METHODS",
        internal: "24/25",
        external: "68/75",
        obtained: 92,
        maxMarks: 100,
        credit: 5,
        gradePoint: 9.2,
        grade: "O",
        result: "Pass"
      },
      {
        code: "U24P1TA31",
        name: "POTHU TAMIL-III (TAMILAGA VARALARUM PANPADUM)",
        internal: "23/25",
        external: "45/75",
        obtained: 68,
        maxMarks: 100,
        credit: 3,
        gradePoint: 6.8,
        grade: "C",
        result: "Pass"
      },
      {
        code: "UZO24NT31",
        name: "BASICS IN APICULTURE",
        internal: "12/15",
        external: "32/35",
        obtained: 44,
        maxMarks: 50,
        credit: 2,
        gradePoint: 8.8,
        grade: "A",
        result: "Pass"
      }
    ]
  },
  {
    semesterNumber: 4,
    semesterName: "Semester 4",
    academicYearLabel: "Second Year (2025-2026)",
    yearNumber: 2,
    subjects: [
      {
        code: "U24P1TA41",
        name: "POTHU TAMIL - IV (TAMIZHUM ARIVIYALUM)",
        internal: "23/25",
        external: "55/75",
        obtained: 78,
        maxMarks: 100,
        credit: 3,
        gradePoint: 7.8,
        grade: "B",
        result: "Pass"
      },
      {
        code: "UMA24NT41",
        name: "MATHEMATICS FOR COMPETITIVE EXAMINATIONS - II",
        internal: "12/15",
        external: "35/35",
        obtained: 47,
        maxMarks: 50,
        credit: 2,
        gradePoint: 9.4,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UCS24CT41",
        name: "ADVANCED JAVA PROGRAMMING",
        internal: "23/25",
        external: "57/75",
        obtained: 80,
        maxMarks: 100,
        credit: 4,
        gradePoint: 8.0,
        grade: "A",
        result: "Pass"
      },
      {
        code: "UCS24CT42",
        name: "COMPUTER NETWORKS",
        internal: "23/25",
        external: "50/75",
        obtained: 73,
        maxMarks: 100,
        credit: 4,
        gradePoint: 7.3,
        grade: "B",
        result: "Pass"
      },
      {
        code: "UCS24CL41",
        name: "ADVANCED JAVA PROGRAMMING LAB",
        internal: "40/40",
        external: "60/60",
        obtained: 100,
        maxMarks: 100,
        credit: 2,
        gradePoint: 10.0,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UCS24CL42",
        name: "PHP PROGRAMMING LAB",
        internal: "40/40",
        external: "60/60",
        obtained: 100,
        maxMarks: 100,
        credit: 2,
        gradePoint: 10.0,
        grade: "O",
        result: "Pass"
      },
      {
        code: "UMA24GT41S",
        name: "OPERATIONS RESEARCH",
        internal: "25/25",
        external: "74/75",
        obtained: 99,
        maxMarks: 100,
        credit: 5,
        gradePoint: 9.9,
        grade: "O",
        result: "Pass"
      },
      {
        code: "U24PVYRC41",
        name: "YOUTH RED CROSS SOCIETY",
        internal: "65/75",
        external: "23/25",
        obtained: 88,
        maxMarks: 100,
        credit: 1,
        gradePoint: 8.8,
        grade: "A",
        result: "Pass"
      }
    ]
  }
];

// --------------------------------------------------------------------------
// 3. TRANSPORT DETAILS
// --------------------------------------------------------------------------
var transportData = {
  mode: "Share Auto",
  vehicleType: "Share Auto",
  startingPoint: "Keelavasal, Madurai",
  destination: "Thiagarajar College, Madurai",
  routeSummary: "Keelavasal → Munichalai → Ganesh Theatre → Thiagarajar College",
  departureTime: "8:00 AM",
  arrivalTime: "8:25 AM",
  duration: "25 Minutes",
  fare: "₹15",
  checkpoints: [
    {
      seq: 1,
      place: "Keelavasal",
      time: "8:00 AM",
      desc: "Boarded Share Auto at Keelavasal. Fare: ₹15."
    },
    {
      seq: 2,
      place: "Munichalai",
      time: "8:08 AM",
      desc: "Travel via Munichalai junction."
    },
    {
      seq: 3,
      place: "Ganesh Theatre",
      time: "8:17 AM",
      desc: "Travel past Ganesh Theatre towards Teppakulam."
    },
    {
      seq: 4,
      place: "Thiagarajar College",
      time: "8:25 AM",
      desc: "Arrived at Thiagarajar College campus."
    }
  ]
};

// --------------------------------------------------------------------------
// DYNAMIC CALCULATION FUNCTIONS
// --------------------------------------------------------------------------

/**
 * Checks if a subject is one of the four specified subjects that have their marks
 * doubled specifically for percentage calculation:
 * 1. Environmental Studies (45/50 -> 90/100)
 * 2. Value Education (44/50 -> 88/100)
 * 3. Basics in Apiculture (44/50 -> 88/100)
 * 4. Mathematics for Competitive Examinations - II (47/50 -> 94/100)
 */
function isDoubledSubject(subject) {
  var name = (subject.name || "").toUpperCase();
  var code = (subject.code || "").toUpperCase();
  return (
    name.indexOf("ENVIRONMENTAL STUDIES") !== -1 ||
    code === "U24AEES11" ||
    name.indexOf("VALUE EDUCATION") !== -1 ||
    code === "U24AEVE21" ||
    code === "U24VE21" ||
    name.indexOf("BASICS IN APICULTURE") !== -1 ||
    code === "UZO24NT31" ||
    code === "UZO24NME31" ||
    name.indexOf("MATHEMATICS FOR COMPETITIVE EXAMINATIONS") !== -1 ||
    code === "UMA24NT41" ||
    code === "UMA24NME41"
  );
}

/**
 * Calculates semester totals, percentage, credits and results.
 * Percentage = (Total Obtained / Total Max) * 100
 * The 4 specified subjects contribute doubled marks to both totals and percentage calculation.
 */
function calculateSemester(subjects) {
  var totalMax = 0;
  var totalObtained = 0;
  var totalCredits = 0;
  var passed = 0;
  var failed = 0;

  for (var i = 0; i < subjects.length; i++) {
    var sub = subjects[i];
    var maxM = Number(sub.maxMarks);
    var obtM = Number(sub.obtained);
    var cr = Number(sub.credit);

    if (isDoubledSubject(sub)) {
      totalObtained += (obtM * 2);
      totalMax += (maxM * 2);
    } else {
      totalObtained += obtM;
      totalMax += maxM;
    }

    totalCredits += cr;

    if (sub.result === 'Pass') passed++;
    else failed++;
  }

  var pct = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;

  return {
    totalMax: totalMax,
    totalObtained: totalObtained,
    totalCredits: totalCredits,
    percentage: parseFloat(pct.toFixed(2)),
    passed: passed,
    failed: failed,
    count: subjects.length
  };
}

/**
 * Calculates overall cumulative academic metrics across all 4 semesters
 */
function calculateOverall() {
  var totalSubjects = 0;
  var totalMax = 0;
  var totalObtained = 0;
  var totalCredits = 0;
  var totalPassed = 0;
  var totalFailed = 0;

  for (var i = 0; i < semestersData.length; i++) {
    var sem = semestersData[i];
    for (var j = 0; j < sem.subjects.length; j++) {
      var sub = sem.subjects[j];
      var maxM = Number(sub.maxMarks);
      var obtM = Number(sub.obtained);
      var cr = Number(sub.credit);

      totalSubjects++;
      totalCredits += cr;

      if (isDoubledSubject(sub)) {
        totalObtained += (obtM * 2);
        totalMax += (maxM * 2);
      } else {
        totalObtained += obtM;
        totalMax += maxM;
      }

      if (sub.result === 'Pass') totalPassed++;
      else totalFailed++;
    }
  }

  var overallPct = totalMax > 0 ? (totalObtained / totalMax) * 100 : 0;

  return {
    totalSubjects: totalSubjects,
    totalMax: totalMax,
    totalObtained: totalObtained,
    totalCredits: totalCredits,
    overallPercentage: parseFloat(overallPct.toFixed(2)),
    totalPassed: totalPassed,
    totalFailed: totalFailed
  };
}

// --------------------------------------------------------------------------
// UI RENDERERS
// --------------------------------------------------------------------------

function renderDashboard() {
  var overall = calculateOverall();
  var s1 = calculateSemester(semestersData[0].subjects);
  var s2 = calculateSemester(semestersData[1].subjects);
  var s3 = calculateSemester(semestersData[2].subjects);
  var s4 = calculateSemester(semestersData[3].subjects);

  // First Year Summary (Sem 1 & 2)
  var y1Obtained = s1.totalObtained + s2.totalObtained;
  var y1Max = s1.totalMax + s2.totalMax;
  var y1Pct = y1Max > 0 ? parseFloat(((y1Obtained / y1Max) * 100).toFixed(2)) : 0;
  var y1Credits = s1.totalCredits + s2.totalCredits;
  var y1Passed = s1.passed + s2.passed;
  var y1Failed = s1.failed + s2.failed;

  // Second Year Summary (Sem 3 & 4)
  var y2Obtained = s3.totalObtained + s4.totalObtained;
  var y2Max = s3.totalMax + s4.totalMax;
  var y2Pct = y2Max > 0 ? parseFloat(((y2Obtained / y2Max) * 100).toFixed(2)) : 0;
  var y2Credits = s3.totalCredits + s4.totalCredits;
  var y2Passed = s3.passed + s4.passed;
  var y2Failed = s3.failed + s4.failed;

  // 1. Navigation and Header student meta
  setText('heroStudentName', studentProfile.fullName);
  setText('heroRegNo', studentProfile.registerNumber);
  setText('heroCourse', studentProfile.course + " (Year " + studentProfile.currentYear + ")");
  setText('heroCollege', studentProfile.college + ", " + studentProfile.place);

  // 2. Home Page 4 Information Boxes (Clean 2x2 layout)
  setText('boxYear', "III Year");
  setText('boxSemesters', "4 Semesters");
  setText('boxPercentage', overall.overallPercentage.toFixed(2) + "%");
  setText('boxTransport', transportData.mode);

  // 3. Student Profile Tab
  setText('profInitial', "DJ");
  setText('profHeroName', studentProfile.fullName);
  setText('profHeroCourse', studentProfile.course + " • Department of " + studentProfile.department);
  setText('profHeroReg', studentProfile.registerNumber);
  setText('profHeroYear', "Year " + studentProfile.currentYear);
  setText('profHeroBatch', studentProfile.academicYear);
  setText('profHeroPlace', studentProfile.place);

  // ONE Combined Student Details Section
  setText('cardName', studentProfile.fullName);
  setText('cardReg', studentProfile.registerNumber);
  setText('cardDob', studentProfile.dateOfBirth);
  setText('cardGender', studentProfile.gender);
  setText('cardDept', studentProfile.department);
  setText('cardCourse', studentProfile.course);
  setText('cardYear', studentProfile.currentYear.indexOf("Year") !== -1 ? studentProfile.currentYear : studentProfile.currentYear + " Year");
  setText('cardCollege', studentProfile.college);
  setText('cardAcademicYear', studentProfile.academicYear);
  setText('cardFather', studentProfile.fatherName);
  setText('cardMother', studentProfile.motherName);
  setText('cardPlace', studentProfile.place);

  // ONE Clean Contact Details Section
  var emailEl = document.getElementById('cardEmail');
  if (emailEl) {
    emailEl.innerText = studentProfile.email;
    emailEl.href = "mailto:" + studentProfile.email;
  }
  setText('cardPhone', studentProfile.phone);
  setText('cardAddress', studentProfile.address);
  setText('cardPin', studentProfile.pinCode || "625009");

  // 4. Cumulative Overall Academic Card
  setText('dashOverallPct', overall.overallPercentage.toFixed(2) + "%");
  setText('dashTotalSubjects', overall.totalSubjects);
  setText('dashTotalMax', overall.totalMax);
  setText('dashTotalObtained', overall.totalObtained);
  setText('dashTotalCredits', overall.totalCredits);
  setText('dashPassed', overall.totalPassed);
  setText('dashFailed', overall.totalFailed);

  // 5. Year-Wise Performance Cards
  setText('y1s1', s1.percentage.toFixed(2) + "%");
  setText('y1s2', s2.percentage.toFixed(2) + "%");
  setText('y1Overall', y1Pct.toFixed(2) + "%");
  setText('y1Credits', y1Credits);
  setText('y1Passed', y1Passed);

  setText('y2s3', s3.percentage.toFixed(2) + "%");
  setText('y2s4', s4.percentage.toFixed(2) + "%");
  setText('y2Overall', y2Pct.toFixed(2) + "%");
  setText('y2Credits', y2Credits);
  setText('y2Passed', y2Passed);

  // 6. Visual Bar Chart
  renderBarChart([
    { name: "Semester 1", calc: s1 },
    { name: "Semester 2", calc: s2 },
    { name: "Semester 3", calc: s3 },
    { name: "Semester 4", calc: s4 }
  ]);

  // 7. Detailed Semester Tables
  renderSemesterTables();

  // 8. Transport Section
  setText('transModeTitle', "Transport Mode: " + transportData.mode);
  setText('transDurationPill', transportData.duration);
  setText('transFarePill', "Fare: " + transportData.fare);
  setText('transVehicle', transportData.vehicleType);
  setText('transDeparture', transportData.departureTime);
  setText('transArrival', transportData.arrivalTime);
  setText('transOrigin', transportData.startingPoint);
  setText('transDest', transportData.destination);
  setText('transRouteSummary', transportData.routeSummary);

  renderTransportTimeline();
}

function setText(id, value) {
  var el = document.getElementById(id);
  if (el) el.innerText = value;
}

function renderBarChart(semesters) {
  var container = document.getElementById('chartBarsContainer');
  if (!container) return;

  var html = '';
  for (var i = 0; i < semesters.length; i++) {
    var item = semesters[i];
    html += '<div class="chart-column">' +
      '<div class="chart-col-head">' +
        '<span class="chart-col-name">' + item.name + '</span>' +
      '</div>' +
      '<div class="chart-score-line">' +
        '<span>Semester Percentage</span>' +
        '<span class="chart-score-val">' + item.calc.percentage.toFixed(2) + '%</span>' +
      '</div>' +
      '<div class="chart-track">' +
        '<div class="chart-fill" style="width: ' + item.calc.percentage + '%;"></div>' +
      '</div>' +
    '</div>';
  }
  container.innerHTML = html;
}

function renderSemesterTables() {
  var container = document.getElementById('semesterTablesContainer');
  if (!container) return;

  var html = '';
  for (var i = 0; i < semestersData.length; i++) {
    var sem = semestersData[i];
    var calc = calculateSemester(sem.subjects);

    html += '<div class="semester-table-container">' +
      '<div class="semester-table-head">' +
        '<div>' +
          '<div class="semester-subhead-tag">' + sem.academicYearLabel + '</div>' +
          '<h4>' + sem.semesterName + ' Marksheet</h4>' +
        '</div>' +
        '<div class="table-pills">' +
          '<span class="table-pill">Credits: ' + calc.totalCredits + '</span>' +
          '<span class="table-pill">Semester Percentage: ' + calc.percentage.toFixed(2) + '%</span>' +
        '</div>' +
      '</div>' +
      '<div class="responsive-table-scroll">' +
        '<table class="marks-data-table">' +
          '<thead>' +
            '<tr>' +
              '<th>Semester</th>' +
              '<th>Course Code</th>' +
              '<th>Course Name</th>' +
              '<th class="text-center">Internal Assessment Mark</th>' +
              '<th class="text-center">External Assessment Mark</th>' +
              '<th class="text-center">Final Assessment Mark</th>' +
              '<th class="text-center">Credit</th>' +
              '<th class="text-center">Grade</th>' +
              '<th class="text-center">Result Status</th>' +
            '</tr>' +
          '</thead>' +
          '<tbody>';

    for (var j = 0; j < sem.subjects.length; j++) {
      var sub = sem.subjects[j];
      var isOutstanding = sub.grade === 'O';

      html += '<tr>' +
        '<td>' + sem.semesterName + '</td>' +
        '<td class="mono-val"><strong>' + sub.code + '</strong></td>' +
        '<td>' + sub.name + '</td>' +
        '<td class="text-center">' + sub.internal + '</td>' +
        '<td class="text-center">' + sub.external + '</td>' +
        '<td class="text-center"><strong>' + sub.obtained + ' / ' + sub.maxMarks + '</strong></td>' +
        '<td class="text-center">' + sub.credit + '</td>' +
        '<td class="text-center">' +
          '<span class="grade-tag ' + (isOutstanding ? 'outstanding' : '') + '">' + sub.grade + '</span>' +
        '</td>' +
        '<td class="text-center"><span class="pass-status-pill">' + sub.result + '</span></td>' +
      '</tr>';
    }

    html += '</tbody></table></div>' +
      '<div class="table-calculation-footer">' +
        '<div class="calc-boxes-row">' +
          '<div class="calc-unit"><span class="title">Total Marks</span><span class="val blue">' + calc.totalObtained + '</span></div>' +
          '<div class="calc-unit"><span class="title">Maximum Marks</span><span class="val">' + calc.totalMax + '</span></div>' +
          '<div class="calc-unit"><span class="title">Semester Percentage</span><span class="val green">' + calc.percentage.toFixed(2) + '%</span></div>' +
          '<div class="calc-unit"><span class="title">Passed Subjects</span><span class="val green">' + calc.passed + '</span></div>' +
          '<div class="calc-unit"><span class="title">Failed Subjects</span><span class="val">' + calc.failed + '</span></div>' +
          '<div class="calc-unit"><span class="title">Credits Registered</span><span class="val">' + calc.totalCredits + '</span></div>' +
          '<div class="calc-unit"><span class="title">Credits Completed</span><span class="val">' + calc.totalCredits + '</span></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  container.innerHTML = html;
}

function renderTransportTimeline() {
  var container = document.getElementById('transportTimelineContainer');
  if (!container) return;

  var html = '';
  for (var i = 0; i < transportData.checkpoints.length; i++) {
    var cp = transportData.checkpoints[i];
    var isDestination = (i === transportData.checkpoints.length - 1);
    html += '<div class="timeline-checkpoint">' +
      '<div class="checkpoint-rail">' +
        '<div class="checkpoint-line"></div>' +
        '<div class="checkpoint-node' + (isDestination ? ' destination-node' : '') + '">' + cp.seq + '</div>' +
      '</div>' +
      '<div class="checkpoint-content-card">' +
        '<div class="checkpoint-top-line">' +
          '<span class="checkpoint-place-title">' + cp.place + '</span>' +
          '<span class="checkpoint-time-badge">' + cp.time + '</span>' +
        '</div>' +
        '<p class="checkpoint-notes">' + cp.desc + '</p>' +
      '</div>' +
    '</div>';
  }
  container.innerHTML = html;
}

// --------------------------------------------------------------------------
// TAB SWITCHING FUNCTION
// --------------------------------------------------------------------------
function switchTab(tabId) {
  var panels = document.querySelectorAll('.dashboard-tab-panel');
  for (var i = 0; i < panels.length; i++) {
    panels[i].classList.remove('active');
  }

  var targetPanel = document.getElementById('panel-' + tabId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  var tabBtns = document.querySelectorAll('.nav-tab-btn');
  for (var j = 0; j < tabBtns.length; j++) {
    var btn = tabBtns[j];
    var onclickAttr = btn.getAttribute('onclick') || '';
    if (onclickAttr.indexOf("'" + tabId + "'") !== -1 || onclickAttr.indexOf('"' + tabId + '"') !== -1) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --------------------------------------------------------------------------
// EDIT MODAL HANDLERS
// --------------------------------------------------------------------------
function openEditModal() {
  var modal = document.getElementById('editModal');
  if (!modal) return;

  document.getElementById('editFullName').value = studentProfile.fullName;
  document.getElementById('editRegNo').value = studentProfile.registerNumber;
  document.getElementById('editFather').value = studentProfile.fatherName || '';
  document.getElementById('editMother').value = studentProfile.motherName || '';
  document.getElementById('editAddress').value = studentProfile.address || '';
  if (document.getElementById('editPin')) {
    document.getElementById('editPin').value = studentProfile.pinCode || '625009';
  }
  document.getElementById('editCourse').value = studentProfile.course;
  document.getElementById('editDepartment').value = studentProfile.department;
  document.getElementById('editYear').value = studentProfile.currentYear;
  document.getElementById('editPhone').value = studentProfile.phone;
  document.getElementById('editEmail').value = studentProfile.email;
  document.getElementById('editPlace').value = studentProfile.place;

  modal.classList.add('open');
}

function closeEditModal() {
  var modal = document.getElementById('editModal');
  if (modal) modal.classList.remove('open');
}

function saveStudentProfile(event) {
  if (event) event.preventDefault();

  studentProfile.fullName = document.getElementById('editFullName').value.trim() || studentProfile.fullName;
  studentProfile.registerNumber = document.getElementById('editRegNo').value.trim() || studentProfile.registerNumber;
  studentProfile.fatherName = document.getElementById('editFather').value.trim() || studentProfile.fatherName;
  studentProfile.motherName = document.getElementById('editMother').value.trim() || studentProfile.motherName;
  studentProfile.address = document.getElementById('editAddress').value.trim() || studentProfile.address;
  if (document.getElementById('editPin')) {
    studentProfile.pinCode = document.getElementById('editPin').value.trim() || studentProfile.pinCode;
  }
  studentProfile.course = document.getElementById('editCourse').value.trim() || studentProfile.course;
  studentProfile.department = document.getElementById('editDepartment').value.trim() || studentProfile.department;
  studentProfile.currentYear = document.getElementById('editYear').value.trim() || studentProfile.currentYear;
  studentProfile.phone = document.getElementById('editPhone').value.trim() || studentProfile.phone;
  studentProfile.email = document.getElementById('editEmail').value.trim() || studentProfile.email;
  studentProfile.place = document.getElementById('editPlace').value.trim() || studentProfile.place;

  closeEditModal();
  renderDashboard();
}

// --------------------------------------------------------------------------
// BOOTSTRAP ON LOAD
// --------------------------------------------------------------------------
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderDashboard);
} else {
  renderDashboard();
}
