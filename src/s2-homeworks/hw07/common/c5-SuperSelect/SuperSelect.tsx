import React, {
    SelectHTMLAttributes,
    DetailedHTMLProps,
    ChangeEvent,
} from 'react'
import s from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
    options,
    className,
    onChange,
    onChangeOption,
    ...restProps
}) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
              <option
                  id={'hw7-option-' + o.id}
                  className={s.option}
                  key={o.id}
                  value={o.id}
              >
                  {o.value}
              </option>
          ))
        : [] // map options with key

    //в колбеке надо явно указать что мы преобразуем получаемое значение из локального стейта -
    //т.к работая с HTML-элементами (например, селектом или радиокнопками), значения, которые возвращаются в событиях
    // (e.currentTarget.value), всегда являются строками. Даже если значения в нашем массиве данных — числа,
    // при выборе опции браузер вернет их как строки.
    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // делают студенты
        if (onChangeOption) {
            onChangeOption(Number(e.currentTarget.value))
        }
    }

    const finalSelectClassName = s.select + (className ? ' ' + className : '')

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
