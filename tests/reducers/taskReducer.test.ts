import { assert, test } from "vitest";
import { initialTasks } from "../../src/App";
import tasksReducer from "../../src/data/taskReducer";


test('test task reducer', () => {
    let state = [...initialTasks]
    assert.deepEqual(state, initialTasks);
    assert(state.length === 3);
    state = tasksReducer(state, {type: 'added', id: 4, text: 'hello world'});
    assert(state.length === 4);
    assert(state[3].text === 'hello world');
    state = tasksReducer(state, {type: 'deleted', id: 1});
    assert(state.length === 3);
    assert(state[0].id === 0);
    assert(state[1].id === 2);
    assert(!state[2].done);
    state = tasksReducer(state, {type: 'changed', task: {id: 4, text: 'hello world', done: true}});
    assert(state[2].done);
});
