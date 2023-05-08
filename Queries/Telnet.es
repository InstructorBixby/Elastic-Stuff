event.category:(network or network_traffic) and destination.port:23
  and network.direction:(inbound or ingress or outbound or egress)
  and not event.category:(
    flow_dropped or denied or deny or
    flow_terminated or timeout or Reject or network_flow or connection)
  and not event.type:(denied)
