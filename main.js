function moreThan5(num) {
  return num>5

}

function topScore(num1,num2) {
  return num1>num2

  
  
}

function isInDanger(num) {
  return num >= 60 && num <=71;

}

function isCoasting(num) {
  return num >= 72 && num <= 83;

}

function isSucceeding(num) {
  return num >=84 && num<=92;

}

function isFailing(num) {
  return num < 60;

}

function isAcing(num) {
  return num >92;

}

function isStudent(str) {
  return str === "student"

}

function isTeacher(str) {
  return str === "teacher"

}

function isAdmin(str) {
  return str === "admin"

}

function isElementary(str) {
  return str === 'elementary'

}

function isMiddleSchoolTeacher(str,num1) {
  return str === "teacher" && num1 >=6 && num1 <=8;
  
}


function notAnElementarySchoolAdministrator(str,str1) {
return str !== 'elementary' || str1 !== 'admin'
  
  
  
}

function differentPeople(name,name1) {
  return name === name1

}

module.exports = {
  moreThan5,
  topScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
  differentPeople,
}