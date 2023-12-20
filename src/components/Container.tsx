
import React, { useState } from 'react';
import { Button, Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import './Container.css';
import QuestionList from '../questions/QuestionList';

/**
 * 容器组件
 * @constructor
 */
function Container() {
    const [Cmp, setCmp] = useState<React.FC>();
    const [cmpName, setCmpName] = useState('');
    const handleClickFire = () => {
        const loadCmp = async(name: string) => {
            const data = await import(`../questions/${name}`);
            setCmp(() => data.default);
        }
        if (cmpName) {
            loadCmp(cmpName);
        }
    }
    const handleRadioChange = (e: RadioChangeEvent) => {
        setCmpName(e.target.value);
    }
    return (
        <div className="button_container">
            <div className="radio_container">
                <Radio.Group value={cmpName} onChange={handleRadioChange}>
                    {
                        QuestionList.map((name) => (
                            <Radio key={name} value={name}>{name}</Radio>
                        ))
                    }
                </Radio.Group>
            </div>
            <Button type="primary" size="large" onClick={handleClickFire} >运行</Button>
            <div>
                {Cmp && <Cmp/>}
            </div>
        </div>
    )
}

export default Container;
