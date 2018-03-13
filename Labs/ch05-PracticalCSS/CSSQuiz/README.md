# Chapter 5: Exercise: CSS Quiz
## Objectives
* Use HTML and CSS to create a quiz page which uses CSS hover to reveal an answer

## Steps:
1. In `WIP` create a folder called `CSSQuiz` - do you work in this folder.
1. First create an HTML layout with Question and Answer boxes - with Q on left and A on right.
2. Then use CSS to hide the answer until it is revealed when the question is hovered.

## Hints: (you can try this on your own and refer to hints below if you like.)
1. If needed, you can refer to the solution in `/Labs/Ch05-PracticalCSS/solution/CSSQuiz/quiz-css.html`
1. There are different ways to approach this. One way is to use floats on block level elements such as 
paragraphs. You will need to give a width to paragraphs. Recall there are ways to fix issues with floating
such as `clear: both`. 
1. In order to hide the answer you can use `display:none`
1. To reveal the answer when hovering over the question, you can use the adjacent sibling selector. question + answer

