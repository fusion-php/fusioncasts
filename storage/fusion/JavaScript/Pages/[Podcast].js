import Pipeline from '@fusion/vue/pipeline';
import ActionFactory from '@fusion/vue/actionFactory';


export const state = ["podcast"];
export const actions = ["fusionSync"];

export function useFusion(props = {}) {
  const state = new Pipeline(props).createState();
  return {
    ...state,
    // TODO eliminate readonly state from being sent
    ...new ActionFactory(actions, state)
  };
}