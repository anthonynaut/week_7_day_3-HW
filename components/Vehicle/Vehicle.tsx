import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface VehicleProps {
    id?:string;
    data?:{}
}

interface VehicleState {
    name: string;
    price: string;
}

export const VehicleForm = (props:VehicleProps) => {

    const dispatch = useDispatch();
    let { vehicleData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<VehicleState>(state => state.name)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            server_calls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Vehicle Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="horsepower">HorsePower</label>
                    <Input {...register('horsepower')} name="horsepower" placeholder="HorsePower"/>
                </div>
                <div>
                    <label htmlFor="max_speed">Top Speed</label>
                    <Input {...register('max_speed')} name="max_speed" placeholder="Top Speed"/>
                </div>
                <div>
                    <label htmlFor="dimensions">Dimensions</label>
                    <Input {...register('dimensions')} name="dimensions" placeholder="Dimensions"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <div>
                    <label htmlFor="torque">Torque</label>
                    <Input {...register('torque')} name="torque" placeholder="Torque"/>
                </div>
                <div>
                    <label htmlFor="redline">Redline</label>
                    <Input {...register('redline')} name="redline" placeholder="Redline"/>
                </div>
                <div>
                    <label htmlFor="engine">Engine</label>
                    <Input {...register('engine')} name="engine" placeholder="Engine"/>
                </div>
                <div>
                    <label htmlFor="series">Series</label>
                    <Input {...register('series')} name="series" placeholder="Series"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}