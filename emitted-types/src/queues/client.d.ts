import { type Config } from "../config";
export declare function createQueue(config: Config, body: CreateQueueBody): Promise<QueueResponse>;
export interface CreateQueueBody {
    queue_name: string;
}
export interface QueueResponse {
    queue_name: string;
    created_on: string;
    modified_on: string;
}
export declare function deleteQueue(config: Config, queueName: string): Promise<void>;
export declare function listQueues(config: Config, page?: number): Promise<QueueResponse[]>;
export declare function getQueue(config: Config, queueName: string): Promise<QueueResponse>;
export declare function postConsumer(config: Config, queueName: string, body: PostConsumerBody): Promise<ConsumerResponse>;
export interface PutConsumerBody {
    settings: ConsumerSettings;
    dead_letter_queue?: string;
}
export interface PostConsumerBody extends PutConsumerBody {
    script_name: string;
    environment_name: string;
}
export interface ConsumerSettings {
    batch_size?: number;
    max_retries?: number;
    max_wait_time_ms?: number;
    max_concurrency?: number | null;
}
export interface ConsumerResponse extends PostConsumerBody {
    queue_name: string;
    script_name: string;
    environment_name: string;
    settings: ConsumerSettings;
    dead_letter_queue?: string;
}
export declare function deleteConsumer(config: Config, queueName: string, scriptName: string, envName?: string): Promise<void>;
export declare function putConsumer(config: Config, queueName: string, scriptName: string, envName: string | undefined, body: PutConsumerBody): Promise<ConsumerResponse>;
