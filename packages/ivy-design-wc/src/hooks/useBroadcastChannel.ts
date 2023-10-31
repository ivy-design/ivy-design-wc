import { shallowRef } from 'vue'

export const useBroadcastChannel = (channel: string = 'ivy-message') => {
    const broadcastChannel = shallowRef<BroadcastChannel>()

    const initBroadcastChannel = (cb: Function) => {
        if (!broadcastChannel.value) {
            broadcastChannel.value = new BroadcastChannel(channel)
        }
        broadcastChannel.value.onmessage = (event) => {
            cb(event.data)
        }
    }

    const postMessage = (message: unknown) => {
        broadcastChannel.value?.postMessage(message)
    }

    const closeBroadcastChannel = () => {
        broadcastChannel.value?.close()
    }

    return {
        initBroadcastChannel,
        postMessage,
        closeBroadcastChannel
    }
}

export default useBroadcastChannel
