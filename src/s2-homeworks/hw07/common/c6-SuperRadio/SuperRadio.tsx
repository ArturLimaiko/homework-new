import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // делают студенты
            if (onChangeOption) {
                onChangeOption(Number(e.currentTarget.value))
        }
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      type={'radio'}
                      // name, checked, value делают студенты
                        name={name}//name у радиокнопок в HTML/JS используется для группировки кнопок, позволяя выбрать только одну из группы.
                      checked={value === o.id}// Проверяем, выбрано ли текущее значение ** ниже под компонентой подробное объяснение
                      value={o.id}
                      onChange={onChangeCallback}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio



//**
//Что делает checked в радиокнопке:
// checked — это атрибут радиокнопки, который указывает, выбрана она или нет.
// Если checked={true}, радиокнопка будет выбрана (поставлена галочка).
// Если checked={false}, радиокнопка не будет выбрана.
// Важность условия checked={value === o.id}:
// Рассмотрим, как работает радиокнопка в твоем случае:
//
// У тебя есть несколько радиокнопок, каждая с уникальным id (например, 1, 2, 3).
// У тебя есть состояние value, которое хранит текущее выбранное значение (например, 1).
// Ты хочешь, чтобы радиокнопка автоматически показывала, выбрана она или нет в зависимости от того,
// совпадает ли её id с текущим значением в состоянии.
// Почему используем value === o.id:
// o.id — это уникальный идентификатор для каждой радиокнопки. Он может быть равен, например, 1, 2 или 3.
//
// Когда ты пишешь checked={value === o.id}, ты проверяешь:
//
// Если текущее состояние value равно o.id (то есть, идентификатору этой конкретной радиокнопки),
// то эта радиокнопка будет выбрана (checked={true}).
// Если они не равны, то эта радиокнопка не будет выбрана (checked={false}).