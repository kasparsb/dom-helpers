import jsx from '../src/jsx';
import replaceContent from '../src/replaceContent';
import click from '../src/event/click';
import clickp from '../src/event/clickp';
import submitp from '../src/event/submitp';
import change from '../src/event/change';
import q from '../src/q';
import qa from '../src/qa';
import createRenderer from '../src/createRenderer';
import append from '../src/append';
import prepend from '../src/prepend';
import parent from '../src/parent';
import addClass from '../src/addClass';
import removeClass from '../src/removeClass';
import toggleClass from '../src/toggleClass';
import hasClass from '../src/hasClass';
import index from '../src/nodeIndex';
import addStyle from '../src/addStyle';
import getStyle from '../src/getStyle';
import replace from '../src/replace';
import getWindowDimensions from '../src/getWindowDimensions';
import getWindowScrollTop from '../src/getWindowScrollTop';
import setWindowScrollTop from '../src/setWindowScrollTop';
import findSelectOption from '../src/findSelectOption';
import clone from '../src/clone';
import insertBefore from '../src/insertBefore';
import insertAfter from '../src/insertAfter';
import next from '../src/next';

let renderUncompleted = createRenderer(function(todos){
    if (!todos || todos.length == 0) {
        return (
            <div class="empty">There is no todo</div>
        )
    }

    return (
        <div class="todos">
            {todos.map(item => (
                <div class="todo" data-id={item.id}>
                    <label>
                        <input type="checkbox" checked={item.completed} /> {item.text}
                    </label>
                </div>
            ))}
        </div>
    )
})

let renderCompleted = createRenderer(function(todos){
    if (!todos || todos.length == 0) {
        return null
    }

    return (
        <div>
            <h2>Completed</h2>
            <div class="todos">
                {todos.map(item => (
                    <div class="todo" data-id={item.id}>
                        <label>
                            <input type="checkbox" checked={item.completed} /> {item.text}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
})

replaceContent('.c', (
    <div>
        <header>Todo app</header>
        {renderUncompleted()}
        {renderCompleted()}
        <div class="add-todo" style={{marginTop:'16px'}}>
            <form method="post">
                <input type="text" /><button type="submit">Add</button>
            </form>
        </div>
    </div>
));

function handleTodoChange(todos) {
    renderUncompleted(todos.filter(item => !item.completed));
    renderCompleted(todos.filter(item => item.completed));
}

let t = 4;

let todos = [
    {completed: false, id: 1, text: 'todo 1'}
]


handleTodoChange(todos);


submitp('.add-todo form', (ev, el) => {
    todos.push({completed: false, id: t, text: q(el, 'input').value})
    t++;

    q(el, 'input').value = '';

    handleTodoChange(todos);
})

change('.todo [type=checkbox]', (ev, el) => {
    let id = parseInt(parent(el, '.todo').dataset.id, 10);

    let i = todos.findIndex(item => item.id === id);

    todos[i].completed = el.checked;

    handleTodoChange(todos);
})


clickp('.div1 [name=toggle]', ev => toggleClass(qa('.div1'), 'div2'))
clickp('.div1 [name=toggleadd]', ev => toggleClass(qa('.div1'), 'div2', true))
clickp('.div1 [name=toggleremove]', ev => toggleClass('.div1', 'div2', false))

clickp('[name=findindex]', ev => {
    console.log(index(q('li:nth-child(4)')));
    console.log(index(q('table tr:nth-child(2) td:nth-child(2)')));
})



clickp('[name=addstyle]', ev => {
    addStyle('.div-style', {
        border: '1px solid red',
        padding: '10px',
    })
})
clickp('[name=getstyle]', ev => {
    console.log(getStyle('.div-style', 'padding'));
})
clickp('[name=getwindowdimensions]', ev => {
    console.log(getWindowDimensions());
})
clickp('[name=getwindowscrolltop]', ev => {
    console.log(getWindowScrollTop());
})
clickp('[name=setwindowscrolltop]', ev => {
    console.log(setWindowScrollTop(10));
})


clickp('[name=findparent]', ev => {
    //console.log(parent('.find-parent'));
    //console.log(parent('.find-parent', 'table'));
    //console.log(parent('.find-parent', 'tr', 'table'));
    //console.log(parent('.find-parent', '.not-existing'));
    console.log(parent(q('.find-parent'), '.not-existing', 'table'));
})


clickp('[name=append]', ev => {
    console.log(append('.app', <div style={{padding:'20px',background:'#39A275',color:'#fff'}}>This is created and appended to .app</div>))
})
clickp('[name=appendarr]', ev => {
    console.log(append('.app', [
        <div style={{padding:'20px',background:'#39A275',color:'#fff'}}>This is 1</div>,
        <div style={{padding:'20px',background:'red',color:'#fff'}}>This is 2</div>
    ]))
})

clickp('[name=selectvalue]', ev => {
    console.log(q('[name=sel]').value)
})
clickp('[name=findselectoption-asd]', ev => {
    console.log(findSelectOption('[name=sel]', 'asd'))
})
clickp('[name=findselectoption-selected]', ev => {
    console.log(findSelectOption('[name=sel]'))
})

clickp('[name=prependone]', ev => {
    console.log(prepend(q('.prepend'), <div style={{border:'2px solid red'}}>onenode</div>));
})
clickp('[name=prependarr]', ev => {
    console.log(prepend(q('.prepend'), [
        <div style={{border:'2px solid green'}}>node 1</div>,
        <div style={{border:'2px solid blue'}}>node 2</div>,
        <div style={{border:'2px solid purple'}}>node 3</div>
    ]));
})


clickp('[name=replace-node]', ev => {
    replace('.prepend', <h1 class="prepend">Replaced with node</h1>)
})

clickp('[name=replace-text]', ev => {
    replace('.prepend', '<h1 class="prepend">Replaced with text</h1>')
})

clickp('[name=clone]', ev => {
    let newTable = clone('.table', el => addStyle(el, {margin: '200px 0'}));
    //let newTable = clone('.table');
    insertAfter('.table', newTable);
    console.log(newTable);
})

clickp('[name=insertbefore]', ev => {

    let r = insertBefore('.table', [
        'This is table',
        <h1>This is table <span><b>!</b></span></h1>
    ])
    console.log(r);
})

clickp('[name=insertafter]', ev => {

    insertAfter('.after .first', [
        'This is next1 after first',
        <h1>This is next2 after first <span><b>!</b></span></h1>
    ])


    insertAfter('.after .last', [
        'This is next1 after last',
        <h1>This is next2 after last <span><b>!</b></span></h1>
    ])

    insertAfter('.after .last', 'This is next1 after after last')
})

clickp('[name=next]', (ev, el) => {

    console.log('Next node is');
    console.log(next(el));
})