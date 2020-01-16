export function setStories(state, stories) {
  state.stories = stories
}

export function setCurrent(state, story) {
  state.current = story
}

export function setChildren(state, { id, children }) {
  const findItem = (parent, id) => {
    if (parent.children) {
      return parent.children.find(
        child => child.id === id || findItem(child, id)
      )
    }
  }

  const item = findItem(state.current, id)
  if (item) item.children = children
}
