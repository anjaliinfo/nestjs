import { SampleService } from './sample.service';
export declare class SampleController {
    private readonly sampleService;
    constructor(sampleService: SampleService);
    getHello(): string;
}
