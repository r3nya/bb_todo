var Todo = Backbone.Model.extend({
    initialize: function(){
        console.log('This model has been initialized.');
    },
    defaults: {
        title: '',
        completed: false
    }
});

var todo1 = new Todo();

console.log(JSON.stringify(todo1));

var todo2 = new Todo({
    title: 'Check the attributes of both model instances in the console.',
    completed: true
});

console.log(JSON.stringify(todo2));

var myTodo = new Todo({
    title: 'Check attributes property of the logged models in the console.'
});

var TodoView = Backbone.View.extend({
    tagName: 'li',
    // Кэширование функции шаблона для отдельной задачи.
    todoTpl: _.template( $('#item-template').html() ),
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },
    // Вызывается при первом создании представления
    initialize: function () {
        this.$el = $('#todo');
    },
    // Повторное отображение заголовков задач.
    render: function() {
        this.$el.html( this.todoTpl( this.model.toJSON() ) );
        this.input = this.$('.edit');
        return this;
    },
    edit: function() {
        // выполняется при двойном щелчке по ярлыку задачи
    },
    close: function() {
        // выполняется, когда задача теряет фокус
    },
    updateOnEnter: function (e) {
        // выполняется при каждом нажатии клавиши в режиме редактирования задачи,
        // но мы будем ждать нажатия enter, чтобы перейти в действие
    }
});

var todoView = new TodoView();

console.log(todoView.el);