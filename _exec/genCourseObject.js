const courseFactory = require('../_lib/courseFactory')

function generateCourse(name){
  let course = courseFactory(name)
  course.generateSection('dev-foundations', 'Developer Foundations')
  course.generateAssignment('dev-foundations', 'growth-mindset', 'Growth Mindset')
  course.generateAssignment('dev-foundations', 'web-basics', 'Web Basics')

  course.generateSection('html-css-fundamentals', 'HTML CSS Fundamentals')
  course.generateAssignment('html-css-fundamentals', 'html-basics', 'HTML Basics')
  course.generateAssignment('html-css-fundamentals', 'css-basics', 'CSS Basics')


  course.generateSection('js-foundations', 'Javascript Foundations')
  course.generateAssignment('js-foundations', 'js-basics-1', 'JS Basics - Part 1')
  course.generateAssignment('js-foundations', 'js-basics-2', 'JS Basics - Part 2')
  course.generateAssignment('js-foundations', 'js-basics-3', 'JS Basics - Part 3')
  course.generateAssignment('js-foundations', 'js-basics-4', 'JS Basics - Part 4')


  course.generateSection('js-essentials', 'Javascript Essentials')
  course.generateAssignment('js-essentials', 're-intro-to-js', 'Re-Introduction to JS')
  course.generateAssignment('js-essentials', 'syntax-basics-1', 'Syntax Basics - 1')


  return course
}

module.exports = generateCourse
