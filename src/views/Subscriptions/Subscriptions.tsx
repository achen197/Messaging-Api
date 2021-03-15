import { Fab, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoadingIndicator } from "../../components/LoadingIndicator/LoadingIndicator";
import { SubscriptionDto } from "../../models/interfaces";
import { getSubscriptions, createSubscriptions } from "../../services/api";
import "./Subscriptions.css"

export const Subscriptions = () => {
    const [subscriptions, setSubscriptions] = useState<SubscriptionDto[]>([]);

    const [isLoading, setIsLoading] = useState<Boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        getSubscriptions()
            .then(res => {
                res.forEach(sub => {
                    sub.expires = new Date(sub.expires).toDateString()
                })
                setSubscriptions(res);
            })
            .catch(e => {
                toast.error("Error retrieving subscriptions");
            })
            .finally(() => setIsLoading(false))
    }, [])

    function createSub(){
        return Promise.resolve()
            .then(() => setIsLoading(true))
            .then(() => createSubscriptions())
            .then(newSub => {
                console.log(newSub)
                toast.success('Subscription Created')
                setSubscriptions(subscriptions.concat(newSub))
            })
            .catch(err => toast.error('Error creating or storing new subscription'))
            .finally(()=> setIsLoading(false))
    }

    return (
        <Grid
            container
            direction="row"
            spacing={1}
        >
            {!isLoading ? (
                <>
                    <Grid container item xs={4}>
                        <ul>
                            {subscriptions.map(sub => 
                                <li key={sub.number}>
                                    {sub.number}
                                    <br/>
                                    {sub.expires}
                                    <br/>
                                </li>
                            )} 
                        </ul>
                    </Grid>
                    <Fab onClick={ createSub } className="btn-group-float" color="primary">
                        +Sub
                    </Fab>
                </>
            ) : (
                <LoadingIndicator />
            )}
        </Grid>
    )
}