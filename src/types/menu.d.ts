interface Menu {
    header?: string
    title?: string
    icon?: string
    to?: string
    divider?: boolean
    getURL?: boolean
    chip?: string
    chipColor?: string
    chipVariant?: string
    chipIcon?: string
    children?: menu[]
    disabled?: boolean
    type?: string
    subCaption?: string
}
