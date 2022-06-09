import React from 'react'

interface VisClassState {}
interface VisClassProps {}

export class VisitorClass extends React.Component<VisClassProps, VisClassState> {
    constructor(props: VisClassProps) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h3>Visitor Class Component</h3>
            </React.Fragment>
        )
    }
}
