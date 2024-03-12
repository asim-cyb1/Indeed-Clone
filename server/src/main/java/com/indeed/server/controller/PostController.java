package com.indeed.server.controller;

import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;
import com.indeed.server.service.PostService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@Slf4j
@CrossOrigin
public class PostController {
    final PostService postService;
    @PostMapping("/post")
    public PostModel savePost(@Valid @RequestBody PostDTO postDTORequest){

        return this.postService.savepost(postDTORequest);

    }
    @GetMapping("/posts")
    public List<PostModel> getAllPosts(){
        return this.postService.getAllPosts();
    }
}
