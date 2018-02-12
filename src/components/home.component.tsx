import * as React from 'react';

interface HomeProps { };
interface HomeStatus { };

export default class Home extends React.Component<HomeProps, HomeStatus>{
    constructor(props: HomeProps) {
        super(props);
    }

    render() {
        return <div>
           this is the home component.
        </div>
    }
}