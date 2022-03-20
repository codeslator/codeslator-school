import { selectTemplateState } from '../store/modules/template/selectors';
import { useAppSelector, useAppDispatch } from './index';
import { setTemplateValue } from '../store/modules/template';


const useTemplate = () => {
  const { value } = useAppSelector(selectTemplateState);
  const dispatch = useAppDispatch();

  const introduceValue = (value: number) => {
    dispatch(setTemplateValue(value));
  }

  return {
    value,
    introduceValue
  };
};

export default useTemplate;