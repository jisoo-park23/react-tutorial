import './SelectStyle.css';
import cn from 'classnames';

export default function SelectStyle({ mode }) {
  return (
    // mode 속성에 따라 스타일 클래스 전환
    <div className={cn(
        [
            'panel',
            {
                light: mode === 'light',
                dark: mode === 'dark',
            }
        ]
        )}>
      Hello World!
    </div>
  );
}