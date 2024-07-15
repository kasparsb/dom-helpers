import jsx from '../src/jsx';
import ce from '../src/ce';
import replaceContent from '../src/replaceContent';
import click from '../src/event/click';
import clickp from '../src/event/clickp';
import submitp from '../src/event/submitp';
import change from '../src/event/change';
import q from '../src/q';
import qa from '../src/qa';
import r from '../src/r';
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
import prev from '../src/prev';
import value from '../src/value';
import setValue from '../src/setValue';
import getFormData from '../src/getFormData';
import setFormData from '../src/setFormData';
import clearFormData from '../src/clearFormData';
import submitForm from '../src/submitForm';
import form from '../src/form';
import wrap from '../src/wrap';
import get from '../src/http/get';
import post from '../src/http/post';
import del from '../src/http/del';
import isArray from '../src/isArray';

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
                <input type="text" />
                <button type="submit">Add</button>
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
    console.log(parent('.find-parent'));
    console.log(parent('.find-parent', 'table'));
    console.log(parent('.find-parent', 'tr', 'table'));
})
clickp('[name=findnotexistingparent]', ev => {
    console.log(q('.find-parent'));
    console.log(parent(q('.find-parent')));
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
clickp('[name=appendnodelist]', ev => {
    console.log(append('.app', qa('.nodelist p')))
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

clickp('[name=replacecontent]', ev => {
    console.log(replaceContent('.replacecontent', <div>new content</div>));
})
clickp('[name=replacecontenttext]', ev => {
    console.log(replaceContent('.replacecontent', value('[name=replacecontenttext_text]')));
})

clickp('[name=value]', ev => {

    // Field pēc querySelector
    console.log(value('.value input'));
    console.log(value(q('.value input')));

    // Field pēc form field name
    console.log(value('.value form', 'name'));
    console.log(value(q('.value form'), 'name'));

    console.log('value from relation element');
    console.log(value(r('.value form'), 'name'));

    console.log(value('.value form', 'chb'));
})
clickp('[name=setvalue]', ev => {
    // setValue('.value form', 'name', 'newvalue')
    // setValue('.value form', 'sel', 2)
    // setValue('.value form', 'chb', null)

    setValue(q('.value form [name=chb]'), true);
    console.log('set value on relation element');
    setValue(r('.value form [name=chb]'), true);

    //setValue('.value [name=name]', 'newvalue2')
})

clickp('[name=getformdata22]', ev => {
    console.log(q('.form1'));
    console.log('from data from q');
    console.log(getFormData(q('.form1')));
    console.log('from data from query selector');
    console.log(getFormData('.form1'));
    console.log('from data from relation el');
    console.log(getFormData(r('.form1')));
})

clickp('[name=wrap]', ev => {
    wrap(q('.wrap .p'), <div style={{border:'2px solid red'}}></div>)
    //wrap(q('.wrap .p'), 'h1')
})

clickp('[name=getformdata]', ev => {
    let data = getFormData('.form1');
    console.log(data)
    for (let field in data) {
        console.log(field+': '+(isArray(data[field]) ? data[field].join(', ') : data[field]));
    }
})

clickp('[name=setformdata]', ev => {
    setFormData('.form1', {

        age: 2,
        chb1: 'chbvalue',
        chb2: false,
        radio1: 'second',
        radio2: 'werwer',
        chbgroup: ['first', 'third'],
        txtgroup: ['asd', 'asdasa', 'werwer', 'asdertert', 'sdfsdfsdf']
    });
})

clickp('[name=clearformdata]', () => {
    clearFormData('.form1');
})

clickp('[name=submitform]', () => {
    submitForm('.form1', 'form.php', 'get')
        .then(r => console.log(r))
})

clickp('[name=httpget]', () => {
    let data = {
        param1: 'asasd',
        param2: 'dfgdfg',
    }
    get(value('[name=geturl]'), data)
        .then(r => console.log(r))
})

clickp('[name=httppost]', () => {
    let data = {
        param1: 'asasd',
        param2: 'dfgdfg',
    }
    post(value('[name=posturl]'), data)
        .then(r => console.log(r))
})

clickp('[name=httpdelete]', () => {
    let data = {
        param1: 'asasd',
        param2: 'dfgdfg',
    }
    del(value('[name=deleteurl]'), data)
        .then(r => console.log(r))
})

clickp('[name=ce]', () => {
    let el = ce(
        'div',
        {
            class: 'cl1',
            style: {
                'color': 'red'
            },
            'data-param1': 'value1',
            'data-param2': 'value1',
            data: {
                param4: 'value4',
                param5: 'value5',
            }
        },
        'asdasd',
        'dfgdfg',
        ce(
            'p',
            {
                style: {
                    color: 'blue',
                    fontWeight: 'bold'
                }
            },
            'paragraph content',
            ce(
                'input',
                {
                    type: 'checkbox',
                    checked: true
                }
            )
        )
    );

    replaceContent('.ce-content', el);
})

clickp('[name=nextel]', () => {
    let c = q('.nextel');
    console.log(c);

    let allItems = qa(c, 'div');
    console.log(allItems);

    let nextAny = next(allItems[0]);
    console.log('next any', nextAny);

    let nextItem = next(allItems[0], '.item');
    console.log('next match .item', nextItem);

    let nextItem2 = next(nextItem, '.item');
    console.log('next match .item 2', nextItem2);

    let nextItem3 = next(nextItem2, '.item');
    console.log('next match .item 3', nextItem3);

    let nextItem4 = next(nextItem3, '.item');
    console.log('next match .item 4', nextItem4);

    let nextAny4 = next(nextItem3);
    console.log('next any 4', nextAny4);

    let nextAny5 = next(nextAny4);
    console.log('next any 5', nextAny5);
})

clickp('[name=prevel]', () => {
    let c = q('.prevel');
    console.log(c);

    let allItems = qa(c, 'div');
    console.log(allItems[allItems.length - 1]);

    let prevAny = prev(allItems[allItems.length - 1]);
    console.log('prev any', prevAny);

    let prevItem = prev(allItems[allItems.length - 1], '.item');
    console.log('prev match .item', prevItem);

    let prevItem2 = prev(prevItem, '.item');
    console.log('prev match .item 2', prevItem2);

    let prevItem3 = prev(prevItem2, '.item');
    console.log('prev match .item 3', prevItem3);

    let prevItem4 = prev(prevItem3, '.item');
    console.log('prev match .item 4', prevItem4);

    let prevAny4 = prev(prevItem3);
    console.log('prev any 4', prevAny4);

    let prevAny5 = prev(prevAny4);
    console.log('prev any 5', prevAny5);
})


clickp('[name=formvalues]', () => {
    let form1 = form('.formvalues')
    let form2 = form('.formvalues', 'data-name')
    console.log(form1);
    console.log(form2);
})

clickp('[name=formvaluesset]', () => {
    let form1 = form('.formvalues')
    let form2 = form('.formvalues', 'data-name')

    form1.field1 = 'changed field1';
    form2.field3 = 'changed data-field3';
})