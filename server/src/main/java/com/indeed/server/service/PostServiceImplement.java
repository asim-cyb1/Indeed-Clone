package com.indeed.server.service;


import com.indeed.server.dao.PostDAO;
import com.indeed.server.dto.PostDTO;
import com.indeed.server.model.PostModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImplement implements PostService {
    @Autowired
    PostDAO postdao;

    @Override
    public PostModel savepost(PostDTO postDTO) {
        PostModel postModel = new PostModel();
        postModel.setProfile(postDTO.getProfile());
        postModel.setDescription(postDTO.getDescription());
        postModel.setType(postDTO.getType());
        postModel.setExperience(postDTO.getExperience());
        postModel.setSalary(postDTO.getSalary());
        postModel.setTechnology(postDTO.getTechnology());

        return postdao.save(postModel);
    }

    @Override
    public List<PostModel> getAllPosts() {
        return postdao.findAll();
    }
}
