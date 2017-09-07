const courseFactory = require('../_lib/courseFactory')

function generateCourse(name){
  let course = courseFactory(name)
  course.generateSection('dev-foundations', 'Developer Foundations')
  course.generateAssignment('dev-foundations', 'growth-mindset', 'Growth Mindset')
  course.generateAssignment('dev-foundations', 'web-basics', 'Web Basics')

  course.generateSection('html-css-fundamentals', 'HTML CSS Fundamentals')
  course.generateAssignment('html-css-fundamentals', 'html-basics', 'HTML Basics')
  course.generateAssignment('html-css-fundamentals', 'css-basics', 'CSS Basics')


  course.generateSection('js-foundations', 'JavaScript Foundations')
  course.generateAssignment('js-foundations', 'js-basics-1', 'JS Basics - Part 1')
  course.generateAssignment('js-foundations', 'js-basics-2', 'JS Basics - Part 2')
  course.generateAssignment('js-foundations', 'js-basics-3', 'JS Basics - Part 3')
  course.generateAssignment('js-foundations', 'js-basics-4', 'JS Basics - Part 4')


  course.generateSection('frontend-foundations', 'Front End Foundations')
  // course.generateAssignment('frontend-fundamentals', 'html-basics', 'HTML Basics')
  // course.generateAssignment('frontend-fundamentals', 'css-basics', 'CSS Basics')


  return course
}

module.exports = generateCourse
