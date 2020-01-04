let state = { count: 0 };
let action = { type: "INCREASE_COUNT" };

function changeState(state, action) {
	switch (action.type) {
		case "INCREASE_COUNT":
			return { count: state.count + 1 };
		default:
			return state;
	}
}

const dispatch = action => {
	state = changeState(state, action);
	return state;
};

dispatch({ type: "INCREASE_COUNT" });
dispatch({ type: "INCREASE_COUNT" });
dispatch({ type: "INCREASE_COUNT" });

const render = () => {
	document.body.textContent = state.count;
};

render();
