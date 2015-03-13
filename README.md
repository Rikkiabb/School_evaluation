# School_evaluation
<li>spurningar</li>
<p>ToDo</p>
<p>Functional</p>
<p>(5%) The admin should be able to create a new evaluation, based on a template. It should be open for a given time (i.e. there should be a start and end time).</p>
<p>(15%) The student should be able to answer the evaluation.</p>
<p>(10%) The admin should be able to view the results of the evaluation, i.e. for each course, view the responses from students and what grade they gave each question. There should be some graphical representation of these numbers (i.e. some kind of a chart component for instance).</p>

<p>Technical Req</p>
<p>(15%) Fully unit tested using Karma/Jasmine. Code coverage determines the grade for this part (i.e. 100% code coverage of 100% of the features -> possibly full grade for this part). If code coverage numbers are missing, the max number of points for this part is 10%. Note that even if code coverage is 100%, this does not automatically mean that the grade for that part is 10! I.e. there should be reasonable expect() statements in each unit test.</p>
<p>(10%) Includes at least one custom directive, preferably the part which renders a single evaluation question to the student:</p>

<p><evaluation-question ng-model="question"></evaluation-question></p>

<p>Note: if you have ideas for a different directive to implement, contact dabs@ru.is to get a permission.</p>
<p>(10%) Uses HTML5/AngularJS validation for input fields</p>
<p>(5%) Responsive, should have great usability on mobile devices. F.ex. polls should have good click areas.</p>
<p>(5%) Should use a CSS precompiler - preferably LESS - for css components.</p>
<p>(5%) The application should have good usability, with minimal number of mouse clicks required to finish each task, and easy to understand workflow. Students should be able to complete the evaluation with minimal effort. Feel free to experiment with adding visual cues to the UI, such as images to indicate better what options are positive and what options are negative.</p>

