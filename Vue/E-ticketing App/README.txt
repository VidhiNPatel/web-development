Topic covered in this lesson
1) Form fields can be bound to Vue data using the v-model directive — how v-model is used depends on the type of field it is being added to
2) Form event handlers can be added using v-on:submit and v-on:reset
3) Modifiers can be used to add functionality to directives — most importantly preventing page reload on form submission using v-on:submit.prevent and cleaning up form field values using .number and .trim
4) Form validation can be implemented by setting the value of the disabled attribute on a <button> to the value of a computed property using v-bind
5) data - used for storing known dynamic values
6) computed - used for computing dynamic values based on known dynamic values — can additionally specify a setter by specifying get and set functions — the setter will update other dynamic values when the computed value changes
7) watch - used for performing functionality when a specified dynamic value changes
8) methods - used for storing instance methods to be used throughout the app