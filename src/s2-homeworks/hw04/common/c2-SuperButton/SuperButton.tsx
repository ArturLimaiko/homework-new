import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = s.button
    //     // + (disabled
    //     //         ? ...
    //     //         : xType === 'red'
    //     //             ? ...
    //     + (className ? ' ' + className : '') // задачка на смешивание классов
    const finalClassName = `${s.button}
    ${disabled ? s.disabled : xType === 'red' ? s.red : xType === 'secondary' ? s.secondary : s.default}
    ${className ? className : ''}`
    // 1 -вначале добавляем базовый класс стиля кнопки ${s.button}
    // 2 - в этой строке мы решаем, какой стиль добавить в зависимости от значений disabled и xType.
    // Если кнопка отключена (disabled === true), мы добавляем класс s.disabled.
    // В противном случае, мы проверяем xType: если xType равен 'red', мы добавляем класс s.red,
    // если xType равен 'secondary', мы добавляем класс s.secondary, иначе добавляем класс s.default.
    // 3 - Здесь мы проверяем переданный в компонент SuperButton класс className.
    // Если он существует, мы добавляем его к списку классов в finalClassName.


    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
