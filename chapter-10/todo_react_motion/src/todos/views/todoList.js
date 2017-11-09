import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import TodoItem from './todoItem';
import { FilterTypes } from '../../constants';
import { selectVisibleTodos } from '../selector';
import { spring, TransitionMotion } from 'react-motion';

const willLeave = () => {
    return {
        height: spring(0),
        opacity: spring(0)
    };
}

const willEnter = () => {
    return {
        height: 0,
        opacity: 0
    };
};

const getStyles = (todos) => {
    return todos.map(item => {
        return {
            key: item.id.toString(),
            data: item,
            style: {
                height: spring(60),
                opacity: spring(1)
            }
        };
    });
}

const TodoList = ({ todos }) => {
    const styles = getStyles(todos);
    return (
        <TransitionMotion
            willLeave={willLeave}
            willEnter={willEnter}
            styles={styles}
        >
            {
                interpolatedStyles =>
                    <ul className="todo-list">
                        {
                            interpolatedStyles.map(config => {
                                const { data, style, key } = config;

                                const item = data;
                                return (<TodoItem
                                    style={style}
                                    key={key}
                                    id={item.id}
                                    text={item.text}
                                    completed={item.completed}
                                />);
                            })
                        }
                    </ul>
            }
        </TransitionMotion>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

// const selectVisibleTodos = (todos, filter) => {
//     switch (filter) {
//         case FilterTypes.ALL:
//             return todos;
//         case FilterTypes.COMPLETED:
//             return todos.filter(item => item.completed);
//         case FilterTypes.UNCOMPLETED:
//             return todos.filter(item => !item.completed);
//         default:
//             throw new Error('unsupported filter');
//     }
// }

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state)
    };
};

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//     onToggleTodo: toggleTodo,
//     onRemoveTodo: removeTodo
// }, dispatch);

// const mapDispatchToProps = {
//     onToggleTodo: toggleTodo,
//     onRemoveTodo: removeTodo
// }

export default connect(mapStateToProps)(TodoList);